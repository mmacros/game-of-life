import("../pkg/index.js").then(({ Universe }) => {
    const pre = document.getElementById("game-of-life-canvas");
    const universe = Universe.new();
    const renderLoop = () => {
        pre.textContent = universe.render();
        universe.tick();

        requestAnimationFrame(renderLoop);
    }
    requestAnimationFrame(renderLoop);
}).catch(console.error)

