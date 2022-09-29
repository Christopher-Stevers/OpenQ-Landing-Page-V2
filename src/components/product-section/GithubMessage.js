import Image from 'next/image';
import { tw } from 'twind';
import styles from './GithubMessage.module.css';
const GithubMessage = () => {
  return (
    <div className={tw(`w-full pt-4 flex relative `)}>
      <div className='w-9 h-9 flex-none'>
        <Image className='rounded-full' height={36} width={36} src={'/githubAvatar.jpg'} />
      </div>

      <div
        className={
          styles.productSectionGithubMessage +
          ' ' +
          tw(`w-full text-primary bg-dark-mode rounded-lg  ml-4 border-gray-500 border  relative border`)
        }
      >
        <div className={tw(`w-full pl-3   py-2 pl-4 text-sm`)}>
          <span className={tw(`font-semibold`)}>Christopher-Stevers</span>
          <span className={tw(`text-muted`)}> commented 1 day ago.</span>
        </div>
        <div className={tw(`w-full p-8 p-4 border-web-gray border-t bg-githubMessageColor rounded-b-lg`)}>
          Hi, I'm ready to work on this issue, could you escrow the budget for it?
        </div>
      </div>
    </div>
  );
};

export default GithubMessage;
