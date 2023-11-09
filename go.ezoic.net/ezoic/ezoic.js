//catch errors and do nothing.
window.onerror = function () {};

function EzPaq() {
  this.content_hash = "";
  this.content_orig = "";
  this.leave_alone = false;
  this.global_window_props = Object.getOwnPropertyNames(window);

  // This gets all new windows vars since object instantiation
  this.find_new_entries = function () {
    var current_prop_list = Object.getOwnPropertyNames(window);

    var self = this;

    function find_duplicate(prop_name) {
      return self.global_window_props.indexOf(prop_name) === -1;
    }

    return current_prop_list.filter(find_duplicate);
  };

  //stores the original content. then overwrites it with an iframe so the "loading" spins for longer
  this.get_content = function () {
    var content = "";

    if (document.head) {
      content += document.head.outerHTML;
      //document.head.outerHTML = '<head></head>';
    }

    if (document.body) {
      content += document.body.outerHTML;
      if (ezpaq.leave_alone != true) {
        //document.body.outerHTML = '<img src="http://www.ezoic.com/assets/img/ezoic-1-loading.gif" style="width:400px">';
        //console.log("writing iframe");
        //document.write("<html><body style='cursor:wait'><iframe src='http://g.ezoic.net/ezoic/ezoic_forever.php?"+Math.floor((Math.random() * 100000) + 1)+"' style='visibility:hidden;width:0px;height:0px:border:0px'></iframe></body></html>");
        //document.write("");
      }
    }
    this.content_orig = content;
  };

  //gets the content of this page and creates a hash
  this.get_content_hash = function () {
    this.get_content();
    return window.md5(this.content_orig);
  };

  this.get_cors = function (method, url) {
    var xmlhttp;

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();

      if (typeof xmlhttp.withCredentials != "undefined") {
        xmlhttp.open("GET", url, true);
      } else if (typeof XDomainRequest != "undefined") {
        xmlhttp = new XDomainRequest();
        xmlhttp.open("GET", url);
      }
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      xmlhttp.open("GET", url);
    }

    try {
      xmlhttp.withCredentials = true;
    } catch (err) {}
    return xmlhttp;
  };

  //load the page from the ezoic server
  this.load_page = function () {
    var url;

    if (document.location.href.indexOf("localhost") > -1) {
      url =
        "http://localhost:8080/middleton/content.php?ezjsu=http://deempleo.net/";
    } else {
      var uproto = "http:";
      if (document.location.protocol == "https:") {
        uproto = document.location.protocol;
      }
      url =
        uproto +
        "//g.ezoic.net?ezjsu=" +
        encodeURIComponent(document.location.href);
      if (document.referrer.length > 0) {
        url += "&ref=" + encodeURIComponent(document.referrer);
      }
    }

    var xmlhttp = this.get_cors("POST", url);

    var self = this;

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          var content = xmlhttp.responseText;

          if (content == "off") {
            //console.log('content off');
            //console.log('orig content:'+ezpaq.content_orig);
            //if(ezpaq.content_orig.length > 0)
            //{
            //    //console.log('reset to orig');
            //    document.open();
            //    document.write(ezpaq.content_orig);
            //    document.close();
            //    ezpaq.unhide_page();
            //}
            //else
            {
              ezpaq.unhide_page();
              //console.log('leave alone');
              ezpaq.leave_alone = true;
            }
          } else {
            // Need to clear out any window vars that were not set before making the js integration call
            var new_entries = self.find_new_entries();
            for (var i = 0; i < new_entries.length; i++) {
              try {
                delete window[new_entries[i]];
              } catch (e) {
                //ignore
              }
            }
            document.open();
            document.write(content);
            document.close();
            ezpaq.unhide_page();
          }
        } else if (xmlhttp == 400) {
          //console.log('400');
          // document.open();
          // document.write(ezpaq.content_orig);
          // document.close();
          ezpaq.unhide_page();
        } else {
          //console.log('something else other than 200 was returned '+xmlhttp.status);

          //if(ezpaq.content_orig.length > 0)
          //{
          //    //console.log('reset to orig');
          //    document.open();
          //    document.write(ezpaq.content_orig);
          //    document.close();
          //    ezpaq.unhide_page();
          //}
          //else
          {
            ezpaq.unhide_page();
            //console.log('leave alone');
            ezpaq.leave_alone = true;
          }
        }

        ezpaq.sync_cookies();
      }
    };

    xmlhttp.send();
  };

  this.unhide_page = function () {
    if (typeof ezoTempStyle != "undefined") {
      //document.styleSheets[0].removeRule(ezoTempStyle);
      try {
        document.getElementsByTagName("head")[0].removeChild(ezoTempStyle);
      } catch (err) {}
    }
    //add a style right away so it appears as quickly as possible.
    //        var ezoTempStyleShow = document.createElement('style');
    //        ezoTempStyleShow.innerHTML = 'body{display:block !important}';
    //        ezoTempStyleShow.id = 'ezoTempStyleShow';
    //        document.getElementsByTagName('head')[0].appendChild(ezoTempStyleShow);
    //
    //        var readyStateCheckInterval = setInterval(function() {
    //            if (document.readyState === "complete") {
    //                clearInterval(readyStateCheckInterval);
    //            }
    //
    //            if(document.getElementById('ezoTempStyle') != null)
    //            {
    //                //remove all our crap
    //                document.getElementById('ezoTempStyle').innerHTML = '';
    //                document.getElementById('ezoTempStyleShow').innerHTML = '';
    //                clearInterval(readyStateCheckInterval);
    //            }
    //        }, 10);
  };

  //gets the expiration for various cookies
  //in hours
  this.cookie_exp = function (cname) {
    if (cname.indexOf("ezoawesome") === 0) {
      return 365 * 2;
    }
    if (cname.indexOf("ezouid") === 0) {
      return 365 * 2;
    }
    return 2;
  };

  this.is_ezoic = function () {
    return true;
  };

  this.ezdomain = null;
  this.get_ez_domain = function () {
    if (this.ezdomain == null) {
      // if the ezdomain js variable already loaded from the page, then use it.
      if (typeof ezdomain !== "undefined") {
        this.ezdomain = ezdomain;
        //console.log('page ezdomain:' + this.ezdomain);
      } else {
        // try to find a script that hasn't run yet that has the domain name in it
        var i = document.evaluate(
          "//script[contains(text(), 'ezdomain')]",
          document.documentElement
        );
        var e = i.iterateNext();
        if (e) {
          var m = e.innerHTML.match(/ezdomain\s*=\s*['"]([^'"]*)['"]\s*;/);
          if (m) {
            this.ezdomain = m[1];
            //console.log('found ezdomain:' + this.ezdomain);
          }
        }
        // i failed, so give up, don't want this to run again
        if (this.ezdomain == null) {
          this.ezdomain = "";
          //console.log('cannot find ezdomain');
        }
      }
    }

    return this.ezdomain;
  };

  //sets a cookie
  this.set_cookie = function (cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + exhours * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    //console.log("cookie -- "+cname + "=" + cvalue + "; " + expires);
    var c = cname + "=" + cvalue + "; " + expires + "; path=/";
    if (this.get_ez_domain() != "") {
      c = c + "; domain=." + ezdomain;
    }
    //console.log("cookie:" + c);
    document.cookie = c;
  };

  //loads the cookies set by the ezoic server and sets them on this domain
  this.sync_cookies = function () {
    var xmlhttp;

    var uproto = "http:";
    if (document.location.protocol == "https:") {
      uproto = document.location.protocol;
    }
    var url = uproto + "//g.ezoic.net/ezoic/gc.php";

    xmlhttp = this.get_cors("GET", url);

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          json_cookies = xmlhttp.responseText;
          //console.log("json_cookies:"+json_cookies);
          ez_cookies = JSON.parse(json_cookies);
          //console.log("ez_cookies:"+ez_cookies);

          for (var key in ez_cookies) {
            if (typeof ez_cookies[key] == "undefined") {
              val = "";
            } else {
              val = ez_cookies[key];
            }

            //console.log(key+' - '+val);

            ezpaq.set_cookie(key, val, ezpaq.cookie_exp(key));
          }
        }
      }
    };

    //console.log('-->');
    xmlhttp.send();
  };

  //Do all the work
  this.DoWork = function () {
    //this.content_hash = this.get_content_hash();
    this.load_page();
  };
}

try {
  if (typeof ezpaq == "undefined") {
    //console.log('loading css');

    css = "";
    if (document.addEventListener) {
      css = "body{display:none}";
    }

    var ezoTempStyle = document.createElement("style");
    ezoTempStyle.setAttribute("type", "text/css");
    if (ezoTempStyle.styleSheet && !ezoTempStyle.sheet)
      ezoTempStyle.styleSheet.cssText = css;
    else ezoTempStyle.appendChild(document.createTextNode(css));
    document.getElementsByTagName("head")[0].appendChild(ezoTempStyle);

    var ezpaq = new EzPaq();
    ezpaq.DoWork();

    //wait for this original page to load
    var readyStateCheckInterval = setInterval(function () {
      if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        //var ezpaq = new EzPaq();
        //ezpaq.DoWork();
        //console.log('leave alone: '+ezpaq.leave_alone);
        if (ezpaq.leave_alone != true) {
          ezpaq.get_content();
        } else {
          //console.log('showing page');
          ezpaq.unhide_page();
        }
      }
    }, 10);
  }
} catch (err) {}
