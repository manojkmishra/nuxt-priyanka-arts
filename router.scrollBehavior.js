export default async function (to, from, savedPosition) {


    if (savedPosition) {
        console.log("SAVED POSITION");
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              selector: savedPosition
            });
          }, 600);
        });
        // not working consistently due to render
        //return savedPosition;
    }
    else if (to.hash) {
        console.log("HASH");
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            selector: to.hash
          });
        }, 600);
      });
    }
    else {
        console.log("NORMAL");
        return { x: 0, y: 0 };
    }}