import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import Image from 'next/image';
import { Jazzicon } from '@ukstv/jazzicon-react';

const listItems = [
  {
    title: `Permissionless Bounties`,
    description: `Pull requests are a much better mental model for decentralized communities. Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, the developer automatically is eligable to withdraw the escrow.`,
  },
];

const AccountingSection = () => (
  <div className={tw(``)}>
    <div className={tw(`bg-dark-mode -mt-1`)}>
      <section className={tw(`font-montserrat pt-8 mx-10 mx-auto`)}>
        <div className={tw(`flex flex-col justify-center`)}>
          <div className={tw(`rounded-2xl text-xs w-min bg-gradient-to-br from-pink-600 to-purple-500`)}>
            <div className={tw(`ml-1 mr-1 rounded-2xl bg-dark-mode`)}>
              <div
                className={tw(
                  ` px-5 py-1 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-300 truncate`,
                )}
              >
                Coming Soon
              </div>
            </div>
          </div>
          <p
            className={tw(
              `text-4xl lg:text-7xl break-normal pt-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-300 `,
            )}
          >
            Accounting Layer
          </p>
        </div>
        <div className={tw(`flex flex-row pt-5 space-x-3 items-center`)}>
          <div className={tw(`border border-2 -ml-2 rounded-lg py-1 px-2 text-sm border-gray-500 text-gray-500`)}>
            @_
          </div>
          <h2 className={tw(`text-md pl-2 text-gray-500`)}>
            Stop wasting time manually tracking your payments on spreadsheets
          </h2>
        </div>
        <div className={tw(`flex flex-row -ml-2 pt-3 items-center`)}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              height="22"
              width="28"
              aria-hidden="true"
              className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
            >
              <path d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z" fill="#465061" />
              <circle cx="14" cy="11" fill="#000000" r="5" stroke="#465061" strokeWidth="2" />
            </svg>
          </div>
          <div className={tw(`pl-5`)}>
            <div className={tw(`flex flex-row items-center border rounded-2xl border-gray-500 py-2 px-4 space-x-1`)}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <p className={tw(`pl-2 text-md font-base text-left text-gray-500`)}>Generate Invoice</p>
            </div>
          </div>
        </div>
        <div className={tw(`border-l ml-1 pt-5 pl-8 border-gray-400 pb-8`)} />
        <div className={tw(`flex flex-col justify-center pl-1 pb-16 pt-3`)}>
          <div className={tw(`pt-16`)}>
            <div className={tw(`p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 w-min`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className={tw(`pt-3 text-white font-semibold text-lg`)}>Unified dashboards, no more block explorer</h2>
            <div className={tw(`text-white pt-2`)}>
              Track every single transaction made with OpenQ in one place{` `}
              <p
                className={tw(`font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-700`)}
              >
                or integrate other
              </p>
              solutions and extend your board.
            </div>
          </div>
          <div className={tw(`pt-16`)}>
            <div className={tw(`p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 w-min`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className={tw(`pt-3 text-white font-semibold text-lg`)}>Financial Reports</h2>
            <div className={tw(`text-white pt-2`)}>
              <p
                className={tw(`font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-700`)}
              >
                Make your income taxable
              </p>
              {` `}
              and generate invoices as well as financial reports automatically for bounties or payroll streams.
              solutions and extend your board.
            </div>
          </div>
          <div className={tw(`pt-16`)}>
            <div className={tw(`p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 w-min`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h2 className={tw(`pt-3 text-white font-semibold text-lg`)}>
              Organize your transaction and put your money to work
            </h2>
            <div className={tw(`text-white pt-2`)}>
              Track every single transaction made with OpenQ in one place{` `}
              <p
                className={tw(`font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-purple-700`)}
              >
                or integrate other
              </p>
              solutions and extend your board.
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default AccountingSection;
