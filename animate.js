var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        console.log('style changed!');
    });    
});

var target = document.getElementsByClassName(".bg")[2];
observer.observe(target, { attributes : true, attributeFilter : ['style'] });