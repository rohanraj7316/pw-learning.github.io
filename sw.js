/**
 * new sw encountered for this domain
 * or there might be a byte differences.
 */
self.addEventListener("install",
    ev => {
        // do stuff during the installation   
    }
);

/**
 * if new sw is installed it will be get activated
 * only when all the pages under that scope is been
 * updated.
 */
self.addEventListener("activate", 
    ev => {
        // controlling all pages into it's scope.
        // this is good time to clean up the data
        // or update the older cache.
    }
);

/**
 * 
 * Events: 
 * install - good time to add cache and resources to
 * the existing sw.
 * activate - good time to clean the cache that has been
 * set up by older sw.
 * message - receive messages from other scripts using
 * this event.
 * 
 * Functional Events:
 * fetch
 * sync - can use background sync. when it is ready we can trigger
 * the background sync with different tags.
 * push
 */
self.addEventListener("fetch", 
    ev => {
        ev.responseWith(
            caches.match(event.request)
        );
    }
);

self.addEventListener("sync",
    ev => {
        if (ev.tag == "foo") {
            ev.waitUntil(doSomething());
        }
    }
);

self.addEventListener("push",
    ev => {
        console.log("I AM LISTENING !!");
    }
);