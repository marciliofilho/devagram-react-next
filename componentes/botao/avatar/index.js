import avatarImg from '../../'

export default function Avatar({ src }) {
    const getAvatar = () => {
        if (src && src !== 'undefined') {
            return src;
        }


    }

    return (
        <img
            src={src}
    );
}