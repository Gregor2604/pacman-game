class Pacman {
    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = this.speed;
        this.direction = DIRECTION_RIGHT; //This will be the Start Direction
        this.currentFrame = 1;
        this.frameCount = 7;
    }

    moveProcess() {
        this. changeDirectionIfPossible();
        this.moveForwards()
        if (this.checkCollision()) {
            this.moveBackwards();
        }
    }

    eat() {

    }

    moveBackwards() { // Here you only have to switch the "+=" and the "-="
        switch (this.direction) {
            case DIRECTION_RIGHT: 
                this.x -= this.speed;
                break;
            case DIRECTION_UP:
                this.y += this.speed;
                break;
            case DIRECTION_LEFT:
                this.x += this.speed;
                break;
            case DIRECTION_BOTTOM:
                this.y -= this.speed;
                break;
        }
    }

    moveForwards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.x += this.speed // I write "+=" because the start direction is right
                break;
            case DIRECTION_UP:
                this.y -= this.speed
                break;
            case DIRECTION_LEFT:
                this.x -= this.speed
                break;
            case DIRECTION_BOTTOM:
                this.y += this.speed
                break;
        }
    }

   checkCollisions() {
        let isCollided = false;
        if (
            map[parseInt(this.y / oneBlockSize)][
                parseInt(this.x / oneBlockSize)
            ] == 1 ||
            map[parseInt(this.y / oneBlockSize + 0.9999)][
                parseInt(this.x / oneBlockSize)
            ] == 1 ||
            map[parseInt(this.y / oneBlockSize)][
                parseInt(this.x / oneBlockSize + 0.9999)
            ] == 1 ||
            map[parseInt(this.y / oneBlockSize + 0.9999)][
                parseInt(this.x / oneBlockSize + 0.9999)
            ] == 1
            ) {
            isCollided = true;
        }
        return isCollided;
    }
    
    checkGhostCollision() {

    }

    changeDirectionIfPossible() {

    }

    changeAnimation() {

    }

    draw() {
        
    }


    // These 4 Functions define the Location / Coordinates of the Pacman
    getMapX() {
        let mapX = parseInt(this.x / oneBlockSize);
        return mapX;
    }

    getMapY() {
        let mapY = parseInt(this.y / oneBlockSize);
        return mapY;
    }

    getMapXRightSide() {
        let mapX = parseInt((this.x * 0.99 + oneBlockSize) / oneBlockSize);
        return mapX;
    }

    getMapYRightSide() {
        let mapY = parseInt((this.y * 0.99 + oneBlockSize) / oneBlockSize);
        return mapY;
    }

}