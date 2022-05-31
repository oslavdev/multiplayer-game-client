
type MousePosition = {
  x: number,
  y: number
}

export function getMousePos(e:React.MouseEvent): MousePosition{
    return { x: e.clientX, y: e.clientY }
}
