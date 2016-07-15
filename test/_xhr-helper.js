// function listenToAjax() {

  // START added code
  var OriginalXMLHttpRequest = window.XMLHttpRequest;
  window.__THE_LOG = [];
  var slice = Array.prototype.slice;
  function log() {
    window.__THE_LOG.push(slice.call(arguments));
  }
  var IGNORE_AJAX_RESPONSE = false;
  // ... more added code at the bottom of the file

  // this is from recordo and converted from coffee to JS
  function WrappedXMLHttpRequest() {
    this._xhr = new OriginalXMLHttpRequest();
    this._xhr.onload = this._onload.bind(this);
    this._xhr.onerror = this._onerror.bind(this);
    Object.defineProperties(this, {
      onreadystatechange: {
        get: (function(_this) {
          return function() {
            return _this._xhr.onreadystatechange;
          };
        })(this),
        set: (function(_this) {
          return function(v) {
            return _this._xhr.onreadystatechange = v;
          };
        })(this)
      },
      readyState: {
        get: (function(_this) {
          return function() {
            return _this._xhr.readyState;
          };
        })(this)
      },
      response: {
        get: (function(_this) {
          return function() {
            return _this._xhr.response;
          };
        })(this)
      },
      responseText: {
        get: (function(_this) {
          return function() {
            return _this._xhr.responseText;
          };
        })(this)
      },
      responseType: {
        get: (function(_this) {
          return function() {
            return _this._xhr.responseType;
          };
        })(this),
        set: (function(_this) {
          return function(v) {
            return _this._xhr.responseType = v;
          };
        })(this)
      },
      responseXML: {
        get: (function(_this) {
          return function() {
            return _this._xhr.responseXML;
          };
        })(this)
      },
      status: {
        get: (function(_this) {
          return function() {
            return _this._xhr.status;
          };
        })(this)
      },
      statusText: {
        get: (function(_this) {
          return function() {
            return _this._xhr.statusText;
          };
        })(this)
      },
      timeout: {
        get: (function(_this) {
          return function() {
            return _this._xhr.timeout;
          };
        })(this),
        set: (function(_this) {
          return function(v) {
            return _this._xhr.timeout = v;
          };
        })(this)
      },
      ontimeout: {
        get: (function(_this) {
          return function() {
            return _this._xhr.ontimeout;
          };
        })(this),
        set: (function(_this) {
          return function(v) {
            return _this._xhr.ontimeout = v;
          };
        })(this)
      },
      onload: {
        get: (function(_this) {
          return function() {
            return _this._clientOnLoad;
          };
        })(this),
        set: (function(_this) {
          return function(v) {
            return _this._clientOnLoad = v;
          };
        })(this)
      },
      onerror: {
        get: (function(_this) {
          return function() {
            return _this._clientOnError;
          };
        })(this),
        set: (function(_this) {
          return function(v) {
            return _this._clientOnError = v;
          };
        })(this)
      },
      upload: {
        get: (function(_this) {
          return function() {
            return _this._xhr.upload;
          };
        })(this)
      },
      withCredentials: {
        get: (function(_this) {
          return function() {
            return _this._xhr.withCredentials;
          };
        })(this),
        set: (function(_this) {
          return function(v) {
            return _this._xhr.withCredentials = v;
          };
        })(this)
      }
    });
  }

  WrappedXMLHttpRequest.prototype._onload = function() {
    var args, responseText;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (this.responseType === '' || this.responseType === 'text') {
      responseText = this.responseText;
    }
    try {
      responseText = JSON.parse(responseText);
    } catch (_error) {}
    if (IGNORE_AJAX_RESPONSE) {
      log('XHR:LOAD', this._method, this._url, this.status);
    } else {
      log('XHR:LOAD', this._method, this._url, this.status, responseText);
    }
    return typeof this._clientOnLoad === "function" ? this._clientOnLoad.apply(this, args) : void 0;
  };

  WrappedXMLHttpRequest.prototype._onerror = function() {
    var args, responseText;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (this.responseType === '' || this.responseType === 'text') {
      responseText = this.responseText;
    }
    log('XHR:ERROR', this._method, this._url, this.status, responseText);
    return typeof this._clientOnError === "function" ? this._clientOnError.apply(this, args) : void 0;
  };

  WrappedXMLHttpRequest.prototype.abort = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = this._xhr).abort.apply(ref, args);
  };

  WrappedXMLHttpRequest.prototype.open = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    this._method = args[0], this._url = args[1];
    return (ref = this._xhr).open.apply(ref, args);
  };

  WrappedXMLHttpRequest.prototype.getAllResponseHeaders = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = this._xhr).getAllResponseHeaders.apply(ref, args);
  };

  WrappedXMLHttpRequest.prototype.getResponseHeader = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = this._xhr).getResponseHeader.apply(ref, args);
  };

  WrappedXMLHttpRequest.prototype.overrideMimeType = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = this._xhr).overrideMimeType.apply(ref, args);
  };

  WrappedXMLHttpRequest.prototype.send = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (typeof args[0] === 'string') {
      this._data = args[0];
    }
    log('XHR:START', this._method, this._url, this._data);
    return (ref = this._xhr).send.apply(ref, args);
  };

  WrappedXMLHttpRequest.prototype.setRequestHeader = function() {
    var args, ref;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return (ref = this._xhr).setRequestHeader.apply(ref, args);
  };

  // START added code
  window.XMLHttpRequest = WrappedXMLHttpRequest;
  arguments[arguments.length - 1]('XHR_WAS_MAPPED'); // Selenium requires that you call a callback
// };
//
// export {listenToAjax};
