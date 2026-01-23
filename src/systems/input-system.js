import { query } from 'bitecs'
import input from '../components/input'

export default (keys, pads) => {
  return world => {
    for (const eid of query(world, [input])) {
      if (keys.ArrowUp) input.y[eid] -= 1
      if (keys.ArrowDown) input.y[eid] += 1
      if (keys.ArrowLeft) input.x[eid] -= 1
      if (keys.ArrowRight) input.x[eid] += 1
      input.a = keys.KeyZ
      input.b = keys.KeyX
    }

    return world
  }
}
