type Draggable = {
    drag: ()=> void
}

type Resizable = {
    resize: ()=> void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    resize(): void {
        console.log('resized')
    },
    drag(): void {
        console.log('dragged')
    }
}

textBox.drag()
textBox.resize()