class EventTarget {
    constructor() {
      this.listeners = {};
    }
  
    addEventListener(event, callback) {
      if(!this.listeners[event]){
		  this.listeners[event]=new Set();
	  }
		this.listeners[event].add(callback);
    }
  
    removeEventListener(event, callback) {
      if(!this.listeners[event]) return;
	   this.listeners[event].delete(callback);
    }
  
    dispatchEvent(event) {
	    if(!this.listeners[event]) return;
		for(let callback of this.listeners[event]){
			callback();
		}
    }
    
  }
  
