import useProfileImage from '../hooks/useProfileImage';

import Avatar from './Avatar';

import useAuth from '../hooks/useAuth';

const MAX_IMGS_UPLOAD = 1;

export default function FormUserImg() {
  const { user, setProfile } = useAuth();
  const { img, uploadImage } = useProfileImage(user?.urlImg);

  const handleUpload = async (evt) => {
    const { length } = evt.target.files;

    const file = evt.target.files['0'];

    if (!file && length > MAX_IMGS_UPLOAD) return;

    const url = await uploadImage(user.id, file);
    //TODO loading snipper
    setProfile(url);
  };

  return (
    <div
      className="relative 
      w-2/5 mx-auto rounded-full overflow-hidden ">
      <label
        htmlFor="input-img"
        className="relative block md:hover:cursor-pointer hover:brightness-[.7] bg-gray-800 z-10">
        <Avatar src={img} />
      </label>
      <input
        type="file"
        id="input-img"
        onChange={handleUpload}
        name="image-url"
        accept=".png, .jpg"
        className="hidden"
      />
    </div>
  );
}
