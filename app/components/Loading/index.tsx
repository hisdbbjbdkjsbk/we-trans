// import Logo from "../../../assets/logo.svg";
// import LogoSm from "../../../assets/logo-sm.svg";
import Logo from "../../../assets/logo-loading.svg";

const Loading = () => (
  <div className='fixed inset-0 flex items-center justify-center z-50'>
    <Logo className='animate-spin-logo hidden scale-75 lg:block' />
    <Logo className='animate-spin-logo scale-50 lg:hidden' />
  </div>
);

export default Loading;
