// LAB Code Challenge #5

// Scenario

// Modify the Figure class from the previous task so that you can sort points and lines in the collection and automatically remove elements with the 
// same values (e.g. lines composed of the same points).

class Point {
    constructor(x, y) {
        this.type = 'point';
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(points) { // [[x, y], [], [], ...]
        this.type = 'line';
        this.points = points.map(p => new Point(p[0], p[1]));
    }
}

class Figure {
    constructor(elements = []) {
        this.addElements();
    }

    addElements(elements = []) {
        this.elements = {
            points: elements.filter(e => e.type === 'point'),
            lines: elements.filter(e => e.type === 'line')
        }        
    }

    addPoint(x, y) {
            this.elements.points.push(new Point(x, y));
    }

    addLine(points=[]) { // [[x, y], [], [], ...]
        this.elements.lines.push(new Line(points));
    }

    toJSON() {
        return JSON.stringify(this.elements);
    }

    fromJSON(data="{}", add=false) {
        let obj = JSON.parse(data);
        if(add) {
            this.elements.points = this.elements.points.concat(obj.points||[]);
            this.elements.lines = this.elements.lines.concat(obj.lines||[]);
        } else {
            this.elements = obj;
        }
    }

    deleteAll() {
        this.elements.points = [];
        this.elements.lines = [];
    }

    static isSamePoint(point1, point2) {
        return point1 && point2 && point1.x && point1.y && point2.x && point2.y && point1.x === point2.x && point1.y === point2.y;
    }
    
    static isSameLine(line1, line2) { 
        let retVal = line1 && line2 && line1.points && line1.points && line1.points.length === line2.points.length;
        if(retVal) {
            retVal = line1.points.every((p,i) => {
                let {x, y} = line2.points[i];
                return p.x === x && p.y === y;
            })
        }
        return retVal;
    }
    
    sortPoints() {
        this.elements.points = this.elements.points.sort((p1, p2) => p2.x - p1.x == 0 ? p2.y - p1.y : p2.x - p1.x);
    }
    
    sortLines() {
        this.elements.lines = this.elements.lines.sort((l1, l2) => {
            let retVal = 0;
            for(let i=0; i<l1.points.length; i++) {
                retVal = l2.points[i].x - l1.points[i].x == 0 ? l2.points[i].y - l1.points[i].y : l2.points[i].x - l1.points[i].x;
                if(retVal) {
                    break;
                }
            };
            return retVal;
        });
    }
    
    cleanUp() {
        this.sortPoints();
        this.elements.points = this.elements.points.reduce((p,c) => Figure.isSamePoint(p[p.length - 1], c) ? p : p.push(c) && p, []);
        this.sortLines();
        this.elements.lines = this.elements.lines.reduce((p,c) => Figure.isSameLine(p[p.length - 1], c) ? p : p.push(c) && p, []);
    }
}