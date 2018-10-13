// passes all tests. Core concepts: constructor functions and the prototype chain

function BrowserWindow(an,wn,t = [{tabURL: 'defaultHomePage.com'}]){
    this.accountName = an;
    this.windowName = wn;
    this.tabs = t;
}

let bwp = BrowserWindow.prototype; // quick access to the prototype

bwp.joinWindows = function(bwInstance){
    if(bwInstance.tabs){
        bwInstance.tabs.forEach(e => this.newTab(e.tabURL));
    }
};

bwp.newTab = function(tabName){
    let nt = {tabURL:tabName};
    this.tabs.push(nt);
};

bwp.closeTab = function(num){
    this.tabs.splice(num,1);
    if(this.tabs.length < 1){ // this part is a gotcha not in the description.
        this.newTab('defaultHomePage.com');
    }
};

