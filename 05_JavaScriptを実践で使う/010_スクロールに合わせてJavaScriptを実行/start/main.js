
// IntersectionObserverのインスタンスには複数のDOM要素を登録可能。
// entriesにはインスタンスオブジェクトが格納される。
const cb = function (entries, observer) {
    // 複数のDOM要素がある場合、どの要素が出入りしているのかをentriesで判定する。
    entries.forEach(entry => {
        // isIntersectingプロパティはtrueの時 = 画面に入った時。falseの時 =　画面から出た時。
        if (entry.isIntersecting) {
            // 画面内に入った際にクラスを付与する。
            // entry.targetはインスタンス化の際に指定したDOM要素。
            entry.target.classList.add('inview');
            // 監視を解除する場合。
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('inview');
        }
    });
}
// IntersectionObserverのオプション。
const options = {
    // 交差対象としたい親要素を指定。
    root: null,
    // 交差対象となるビューポートとのマージンを指定。
    rootMargin: "-300px 0px 0px 0px",
    // 要素の交差地点を指定。配列として上下左右にも指定可能。
    threshold: 0,

};
// スクロール検知のクラスIntersectionObserverをインスタンス化。
// 引数にはコールバック関数を渡す。
const io = new IntersectionObserver(cb, options);

// インスタンスに監視したいDOMを指定する。
// observeメソッドで対象要素を登録。
const child = document.querySelector('.child');
// childが画面内に入った時と、画面外に出た時にIntersectionObserverのコールバック関数が呼ばれる。
io.observe(child);

