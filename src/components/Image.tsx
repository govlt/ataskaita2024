import NextImage, {ImageProps} from 'next/image'

const Image = ({src, ...rest}: ImageProps) => (
    // <NextImage src={`${src}`} {...rest} />
    <NextImage src={`/ataskaita2024${src}`} {...rest} />
)

export default Image