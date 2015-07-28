var a = ["cat", "cats", "catsdogcats", "catxdogcatsrat", "dog", "dogcatsdog", "hippopotamuses", "rat",  "ratcatdogcat"];
function find(x){
    x.sort(function(a, b){ return b.length - a.length; });
    var list = [];
    x.filter(function(a){
        var reserve = a, store = [];
        x.filter(function(d){
            if(a !== d){
                if(a.indexOf(d) > -1){ store.push(d); }
            }
        });
        for(var i=0; i < store.length; i++){
            reserve = reserve.replace(new RegExp(store[i], 'g'), '');
        }
        if(!reserve)list.push(a);
    })
    return {total: list, count: list.length}
}
find(a);
