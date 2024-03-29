import { Fade } from 'react-reveal'

export default function MainContent({data, current}) {
  return (
<Fade>{data[current] && data[current].content}</Fade>
    )
}
