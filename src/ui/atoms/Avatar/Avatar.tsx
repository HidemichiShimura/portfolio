import avatar from "../../../../public/images/avatar.jpg";

export default function Avatar() {
  console.log(avatar);

  return <img src={avatar.src} />;
}
