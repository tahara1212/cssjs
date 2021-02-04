document.addEventListener('DOMContentLoaded', function () {


    const cb = function (el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb, {once: false});
    
    // const cb = function (entries, observer) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // const ta = new TextAnimation(entry.target);
    //             // ta.animate();
    //             observer.unobserve(entry.target);
    //         } else {
    //         }
    //     });
    // };
    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0
    // };

    


});

class ScrollObserver {
    constructor(els, cb, options) {
        // コンストラクタにはthisプロパティに値をセットするものを記載した方が良い。それ以外はメソッド化。
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb = cb;
        // assignメソッドによって、defaultOptionsにoptionsを上書き（optionsに指定されていないプロパティはdefaultOptionsを引き継ぐ）
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        // 最終的に初期化メソッドを呼び出し、定義漏れ等のバグ混入を防ぐ。
        this._init();
    }
    _init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // const ta = new TextAnimation(entry.target);
                    // ta.animate();
                    this.cb(entry.target, true);
                    if (this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        };

        const io = new IntersectionObserver(callback.bind(this), this.options);
        this.els.forEach(el => io.observe(el));
    };
    
}