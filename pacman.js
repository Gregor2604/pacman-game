class Pacman {
    constructor (x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = this.speed
        this.direction = DIRECTION_RIGHT //This will be the Start Direction
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

    moveBackwards() {

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

    checkCollision() {

    }

    checkGhostCollision() {

    }

    changeDirectionIfPossible() {

    }

    changeAnimation() {

    }

    draw() {
        
    }
}