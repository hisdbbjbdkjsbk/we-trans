// import Logo from "../../../assets/logo.svg";
// import LogoSm from "../../../assets/logo-sm.svg";
// import Logo from "../../../assets/logo-loading.svg";
import W from "../../../assets/w-2.svg";
import Arrow from "../../../assets/Frame 12-2.svg";

const Loading = () => (
  <div className='fixed inset-0 flex items-center justify-center z-50'>
    {/* <Logo className='animate-spin-logo hidden scale-75 lg:block' />
    <Logo className='animate-spin-logo scale-50 lg:hidden' /> */}
    <div className='relative'>
      <W className='absolute z-10 w-12 h-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      <Arrow className='absolute w-[142px] h-[142px] top-1/2 animate-spin-logo-loading  left-1/2 -translate-x-1/2 -translate-y-1/2' />
    </div>
  </div>
);

export default Loading;
