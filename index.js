/**
 * pre-cache assets - application shell architecture.
 * fallback for offline cache.
 * 
 * registration -> installation -> activation
 */

function swCycle() {
    /**
     * we can trigger this as many times as
     * you want but browser will register it
     * only it doesn't exists also will update
     * it if new sw exists.
     */
    if (!("serviceWorker" in navigator)) {
        console.log("sw not supported");
    } 

    navigator.serviceWorker.register(
        "/sw.js", {
            scope: '/'
        }
    ).then(
        reg => {
            // scope represents which path sw will intercept.
            // can't have scope higher than it's path.
            console.log(reg);
        }
    ).catch(
        err => {
            console.error(err);
        }
    );

    /**
     * 
     */
    navigator.serviceWorker.ready.then(
        swRegistration => {
            console.log(swRegistration);
            // return swRegistration.sync.register("foo");
        }
    ).catch(
        err => {
            console.error(err);
        }
    );
}

function request() {
    return new Promise();
}

function main() {
    swCycle();
}

main();