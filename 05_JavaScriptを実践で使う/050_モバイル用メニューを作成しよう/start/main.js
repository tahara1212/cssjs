class MobileMenu {
    constructor() {
        console.log("const");
        console.log(this);
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }
    
    _getEventType() {
        // スマホのブラウザにのみ登録されているontouchstartイベントの有無でPCかSPかを判定する。
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        console.log("toggle");
        console.log(this);
        this.DOM.container.classList.toggle('menu-open');
    }
    
    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

const mm = new MobileMenu();