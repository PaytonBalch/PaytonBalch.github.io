$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 300, 200, 10, "blue");
    createPlatform(0, 450, 700, 10, "blue");
    createPlatform(800, 0, 10, 515, "blue");
    createPlatform(1000, 650, 10, 100, "blue");
    createPlatform(900, 650, 100, 10, "blue")
    createPlatform(875, 150, 50, 10, "blue")
    createPlatform(800, 265, 25, 10, "blue")
    createPlatform(1000, 378, 25, 10, "blue")
    createPlatform(800, 515, 25, 10, "blue")
    createPlatform(1100, 200, 25, 10, "blue")
    createPlatform(1350, 400, 25, 10, "blue")
    createPlatform(550, 590, 20, 10, "blue")
    createPlatform(450, 590, 20, 10, "blue")
    createPlatform(350, 590, 20, 10, "blue")
    createPlatform(250, 590, 20, 10, "blue")
    createPlatform(150, 590, 20, 10, "blue")
    createPlatform(0, 675, 800, 100, "blue")
    createPlatform(100, 480, 500, 10, "blue")






    // TODO 3 - Create Collectables
    createCollectable("diamond", 50, 500, 0, 0);
    createCollectable("diamond", 880, 110, 0, 0);
    createCollectable("diamond", 1340, 360, 0,0);



    
    // TODO 4 - Create Cannons
    createCannon("right", 375, 2000);
    createCannon("top", 500, 2000);
    createCannon("top", 400, 2000);
    createCannon("top", 1200, 2000);
    createCannon("top", 600, 2000);
    createCannon("top", 700, 2000);
    createCannon("top", 550, 2500);
    createCannon("top", 650, 2500);
    createCannon("top", 450, 2500);
    createCannon("right", 675, 2000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
