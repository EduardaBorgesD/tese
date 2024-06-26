function enterView(options) {
    var { selector, enter, exit, offset = 0, once = false } = options;

    if (!selector || !enter) {
        console.error("Must set selector and enter options");
        return;
    }

    const elements = typeof selector === "string" ? document.querySelectorAll(selector) : selector;
    if (!elements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: `0px 0px ${offset}px 0px`, 
        threshold: 0 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                enter(entry.target);
                if (once) {
                    observer.unobserve(entry.target);
                }
            } else if (exit) {
                exit(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => observer.observe(element));
}

