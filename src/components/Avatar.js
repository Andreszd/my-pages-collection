import { ReactComponent as DefaultAvatar } from '../assets/img/default_avatar.svg';

export default function Avatar({ src }) {
  return (
    <>
      {' '}
      {src ? (
        <img src={src} alt="user-avatar" />
      ) : (
        <DefaultAvatar className="w-full h-full" />
      )}{' '}
    </>
  );
}
