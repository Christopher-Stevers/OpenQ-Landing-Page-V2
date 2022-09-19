import { tw } from 'twind';
import Image from 'next/image';
import { useState, useEffect } from 'react';
const Bounties = () => {
  const [bountiesVisible, setBountiesVisible] = useState();


  useEffect(() => {
    const handleScroll = () => {
      if (!bountiesVisible && window.scrollY > 50) {
        setBountiesVisible(true);
      }
    };

    handleScroll();

    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);
  return (
    <div
      className={tw(
        `relative px-4 -top-36 -mb-32 md:-top-96 md:-mb-80 lg:-top-96 lg:-mb-80 xl:-top-96 xl:-mb-80 z-10 w-full flex justify-center`
      )}
    >
      <div
        className={tw(
          ` sm:px-12 px-2 bg-app-bg rounded-md relative w-full max-w-screen-md invisible ${bountiesVisible && 'animate-fadeIn visible'}`
        )}
      >
        <div className={tw(`flex gap-1 py-4`)}>
          <div className={tw(`bg-red-500 h-4 w-4 rounded-full`)}></div>
          <div className={tw(`bg-yellow-500 h-4 w-4 rounded-full`)}></div>
          <div className={tw(`bg-green-500 h-4 w-4 rounded-full`)}></div>
        </div>
        <div>
          {' '}
          <div
            className={tw(
              `lg:col-start-2 justify-between text-left justify-self-center space-y-4 w-full pb-8 max-w-screen-xl mx-auto`
            )}
          >
            <div className={tw(`hidden md:flex  flex-wrap gap-4 w-full items-center`)}>
              <div
                type='text'
                disabled='true'
                className={tw(
                  `flex-1 lg:col-span-3 col-span-4 input-field-big rounded-lg w-full py-2 pl-8 pr-3 text-sm tracking-wider leading-tight h-min text-muted bg-transparent rounded-full outline-none border border-web-gray bg-subtle focus-within:border-blue-400`
                )}
                value='order:newest '
                aria-label='search text'
                placeholder='Search Issue...'
              >
                Search Issue...
              </div>
              <div
                className={tw(
                  `lg:col-start-4 col-span-4 lg:col-span-1 whitespace-nowrap btn-primary bg-github-primary text-white rounded-lg py-2 flex flex-row space-x-3 items-center justify-center leading-tight h-min md:w-min px-3 w-full`
                )}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={tw(`h-5 w-5`)}
                  viewBox='0 0 24 24'
                  fill='transparent'
                  stroke='white'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  ></path>
                </svg>
                <div>New Contract</div>
              </div>
            </div>
            <div className={tw(`w-full rounded-lg hidden md:block`)}>
              <div className={tw(`flex flex-wrap gap-4  border-web-gray rounded-lg bg-githubMessageColor`)}>
                <div className={tw(`flex text-sm rounded-lg overflow-hidden w-fit text-primary `)}>
                  <div className={tw(`w-36 py-[5px] px-4 rounded-l-lg border whitespace-nowrap  border-web-gray`)}>
                    Ready for work
                  </div>
                  <div
                    className={tw(
                      `w-fit min-w-[80px] py-[5px] px-4 rounded-r-lg border whitespace-nowrap bg-secondary-btn border-secondary-btn`
                    )}
                  >
                    All issues
                  </div>
                </div>
                <div
                  className={tw(
                    `inline-flex justify-between w-36 rounded-l-sm border-border-default text-primary rounded-l-sm leading-2 py-[5px] px-4`
                  )}
                >
                  Sort Order
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={tw(`relative top-1`)}
                    fill='#8b949e'
                    stroke='#8b949e'
                    viewBox='0 0 16 16'
                    width='16'
                    height='16'
                  >
                    <path d='M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z'></path>
                  </svg>
                </div>
                <details className={tw(`max-h-8 whitespace-nowrap text-sm text-muted cursor-pointer`)}>
                  <summary
                    className={tw(
                      `inline-flex justify-between w-24 rounded-l-sm border-border-default text-primary rounded-l-smleading-2 py-[5px] px-4`
                    )}
                  >
                    Labels
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={tw(` relative top-1`)}
                      viewBox='0 0 16 16'
                      fill='#8b949e'
                      stroke='#8b949e'
                      width='16'
                      height='16'
                    >
                      <path d='M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z'></path>
                    </svg>
                  </summary>
                </details>
              </div>
            </div>

            <div className={tw(` md:border border-web-gray rounded-lg `)}>
              <div>
                <div className={tw(`w-full`)}>
                  <div className={tw(`flex flex-col md:px-4 py-4 border-web-gray border-b cursor-pointer`)}>
                    <div className={tw(`flex flex-row flex-wrap md:flex-nowrap justify-between md:pt-0 text-primary`)}>
                      <div className={tw(`w-3/4`)}>
                        <div className={tw(`flex flex-grow flex-row items-center md:space-x-2 md:pb-0 w-full`)}>
                          <div className={tw(`hidden md:block`)}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className={tw(`fill-green`)}
                              viewBox='0 0 16 16'
                              fill='#8b949e'
                              width='19'
                              height='19'
                            >
                              <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                              <path
                                fillRule='evenodd'
                                d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                              ></path>
                            </svg>
                          </div>
                          <div className={tw(`break-word text-xl text-link-colour inline gap-1 pb-1`)}>
                            <span data-testid='repo'>snapshot-labs/snapshot</span>
                            <span></span>
                          </div>
                        </div>
                        <div className={tw(`font-bold text-lg`)}>add space members (followers) to about page</div>
                        <div className={tw(`flex flex-row items-center space-x-4 w-full`)}>
                          <div className={tw(`font-light text-sm w-full`)}>Deployed: 0 days ago.</div>
                        </div>
                        <div className={tw(`pt-1`)}>
                          <ul className={tw(`flex flex-wrap w-full flex-row gap-1 py-px`)}>
                            <li
                              className={tw(
                                `rounded-lg text-xs mr-2 mb-px py-px px-2 font-bold border border-purple-500  truncate inline list-style-none`
                              )}
                              style={{
                                backgroundColor: 'rgba(77, 25, 233, 0.133)',
                                borderColor: 'rgb(77, 25, 233)',
                                opacity: 0.9,
                                color: 'rgb(166, 140, 244)',
                              }}
                            >
                              design
                            </li>
                          </ul>
                        </div>
                        <div className={tw(`flex flex-row items-center gap-4 text-muted font-semibold`)}>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className={tw(`stroke-muted inline-block mr-1 -mt-1 `)}
                              viewBox='0 0 16 16'
                              fill='#8b949e'
                              stroke='#8b949e'
                              width='16'
                              height='16'
                            >
                              <path d='M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z'></path>
                            </svg>
                            <span>0</span>
                          </span>
                          <span>Assigned to no one.</span>
                        </div>
                      </div>
                      <div className={tw(`flex flex-col justify-between items-end leading-tight `)}>
                        <div className={tw(`md:block hidden`)}>
                          <Image
                            height={51}
                            width={51}
                            className='rounded-full pt-1'
                            src={'https://avatars.githubusercontent.com/u/72904068?s=200&v=4'}
                          />
                        </div>
                        <div className={tw(`flex gap-4 content-center items-center justify-between md:w-60`)}>
                          <span className={tw(`font-semibold flex flex-end items-center content-center gap-1 w-max`)}>
                            <svg
                              aria-hidden='true'
                              role='img'
                              className={tw(`octicon octicon-person`)}
                              viewBox='0 0 16 16'
                              width='16'
                              height='16'
                              fill='#8b949e'
                              style={{
                                display: 'inline-block',
                                userSelect: 'none',
                                verticalAlign: 'text-bottom',
                                overflow: 'visible',
                              }}
                            >
                              <path
                                fillRule='evenodd'
                                d='M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z'
                              ></path>
                            </svg>
                            <div className={tw(`whitespace-nowrap`)}>Fixed Price</div>
                          </span>
                          <div className={tw(`flex gap-2`)}>
                            <div className={tw(`flex flex-row space-x-1 items-center`)}>
                              <div className={tw(`pr-2 pt-1 flex-0 w-4`)}>
                                <Image height={20} width={12} className='rounded-full pt-1' src={'/eth-colour.png'} />
                              </div>
                              <div className={tw(`font-semibold `)}>TVL</div>
                              <div className=''>$400.30</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={tw(`w-full hidden md:block`)}>
                  <div className={tw(`flex flex-col md:px-4 py-4 border-web-gray cursor-pointer border-b`)}>
                    <div className={tw(`flex flex-row flex-wrap md:flex-nowrap justify-between md:pt-0 text-primary`)}>
                      <div className={tw(`w-3/4`)}>
                        <div className={tw(`flex flex-grow flex-row items-center md:space-x-2 md:pb-0 w-full`)}>
                          <div className='hidden md:block'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className={tw(`fill-green`)}
                              viewBox='0 0 16 16'
                              fill='#8b949e'
                              width='19'
                              height='19'
                            >
                              <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                              <path
                                fillRule='evenodd'
                                d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                              ></path>
                            </svg>
                          </div>

                          <div className={tw(`break-word text-xl text-link-colour inline gap-1 pb-1`)}>
                            <span data-testid='repo'>openqdev/openq-frontend</span>
                            <span></span>
                          </div>
                        </div>
                        <div className={tw(`font-bold text-lg`)}>(no priority) add amount of claim on actionbubble</div>
                        <div className={tw(`flex flex-row items-center space-x-4 w-full`)}>
                          <div className={tw(`font-light text-sm w-full`)}>Deployed: 0 days ago.</div>
                        </div>
                        <div className={tw(`pt-1`)}>
                          <ul className={tw(`flex flex-wrap w-full flex-row gap-1 py-px`)}>
                            <li
                              className={tw(
                                `rounded-lg text-xs mr-2 mb-px py-px px-2 font-bold border border-purple-500  truncate inline list-style-none`
                              )}
                              style={{
                                backgroundColor: 'rgba(162, 238, 239, 0.133)',
                                borderColor: 'rgb(162, 238, 239)',
                                opacity: 0.9,
                                color: 'rgb(208, 246, 247)',
                              }}
                            >
                              enhancement
                            </li>
                            <li
                              className={tw(
                                `rounded-lg text-xs mr-2 mb-px py-px px-2 font-bold border border-purple-500  truncate inline list-style-none`
                              )}
                              style={{
                                backgroundColor: 'rgba(174, 159, 169, 0.133)',
                                borderColor: 'rgb(174, 159, 169)',
                                opacity: 0.9,
                                color: 'rgb(214, 207, 212)',
                              }}
                            >
                              not urgent
                            </li>
                            <li
                              className={tw(
                                `rounded-lg text-xs mr-2 mb-px py-px px-2 font-bold border border-purple-500  truncate inline list-style-none`
                              )}
                              style={{
                                backgroundColor: 'rgba(29, 118, 219, 0.133)',
                                borderColor: 'rgb(29, 118, 219)',
                                opacity: 0.9,
                                color: 'rgb(142, 186, 237)',
                              }}
                            >
                              icebox
                            </li>
                          </ul>
                        </div>
                        <div className={tw(`flex flex-row items-center gap-4 text-muted font-semibold`)}>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className={tw(`stroke-muted inline-block mr-1 -mt-1 `)}
                              viewBox='0 0 16 16'
                              fill='#8b949e'
                              stroke='#8b949e'
                              width='16'
                              height='16'
                            >
                              <path d='M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z'></path>
                            </svg>
                            <span>1</span>
                          </span>
                          <span>Assigned to Anya</span>{' '}
                          <div className={tw(`md:block hidden`)}>
                            <Image
                              height={24}
                              width={24}
                              className='rounded-full pt-1'
                              src={'https://avatars.githubusercontent.com/u/75732239?s=64&v=4'}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={tw(`flex flex-col justify-between items-end leading-tight `)}>
                        <div className={tw(`md:block hidden`)}>
                          <Image
                            height={51}
                            width={51}
                            className='rounded-full pt-1'
                            src={'https://avatars.githubusercontent.com/u/77402538?s=200&v=4'}
                          />
                        </div>
                        <div className={tw(`flex gap-4 content-center items-center justify-between md:w-60`)}>
                          <span className={tw(`font-semibold flex flex-end items-center content-center gap-1 w-max`)}>
                            <svg
                              aria-hidden='true'
                              role='img'
                              className={tw(`octicon octicon-person`)}
                              viewBox='0 0 16 16'
                              width='16'
                              height='16'
                              fill='#8b949e'
                              style={{
                                display: 'inlineBlock',
                                userSelect: 'none',
                                verticalAlign: 'text-bottom',
                                overflow: 'visible',
                              }}
                            >
                              <path
                                fillRule='evenodd'
                                d='M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z'
                              ></path>
                            </svg>
                            <div className={tw(`whitespace-nowrap`)}>Fixed Price</div>
                          </span>
                          <div className={tw(`flex flex-row space-x-1 items-center`)}>
                            <div className={tw(`pr-2 pt-1 flex-0 w-4`)}>
                              <Image height={20} width={12} className='rounded-full pt-1' src={'/eth-colour.png'} />
                            </div>
                            <div className={tw(`font-semibold `)}>TVL</div>
                            <div className=''>$302.30</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={tw(`w-full`)}>
                  <div className={tw(`flex flex-col md:px-4 py-4 border-web-gray cursor-pointer`)}>
                    <div className={tw(`flex flex-row flex-wrap md:flex-nowrap justify-between md:pt-0 text-primary`)}>
                      <div className={tw(`w-3/4`)}>
                        <div className={tw(`flex flex-grow flex-row items-center md:space-x-2 md:pb-0 w-full`)}>
                          <div className={tw(`hidden md:block`)}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className={tw(`fill-green`)}
                              viewBox='0 0 16 16'
                              fill='#8b949e'
                              width='19'
                              height='19'
                            >
                              <path d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
                              <path
                                fillRule='evenodd'
                                d='M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z'
                              ></path>
                            </svg>
                          </div>
                          <div className={tw(`break-word text-xl text-link-colour inline gap-1 pb-1`)}>
                            <span data-testid='repo'>honey-labs/honey-frontend</span>
                            <span></span>
                          </div>
                        </div>
                        <div className={tw(`font-bold text-lg`)}>sort by health factor</div>
                        <div className={tw(`flex flex-row items-center space-x-4 w-full`)}>
                          <div className={tw(`font-light text-sm w-full`)}>Deployed: 0 days ago.</div>
                        </div>
                        <div className={tw(`pt-1`)}>
                          <ul className={tw(`flex flex-wrap w-full flex-row gap-1 py-px`)}>
                            <div className={tw(`pt-5`)}></div>
                          </ul>
                        </div>
                        <div className={tw(`flex flex-row items-center gap-4 text-muted font-semibold`)}>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className={tw(`stroke-muted inline-block mr-1 -mt-1 `)}
                              viewBox='0 0 16 16'
                              fill='#8b949e'
                              stroke='#8b949e'
                              width='16'
                              height='16'
                            >
                              <path d='M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z'></path>
                            </svg>
                            <span>2</span>
                          </span>
                          <span>Assigned to no one.</span>
                        </div>
                      </div>
                      <div className={tw(`flex flex-col justify-between items-end leading-tight `)}>
                        <div className={tw(`md:block hidden`)}>
                          <Image
                            className='rounded-full '
                            src={'https://avatars.githubusercontent.com/u/92924948?s=200&v=4'}
                            alt='avatarUrl'
                            width='51'
                            height='51'
                          />
                        </div>
                        <div className={tw(`flex gap-4 content-center items-center justify-between md:w-60`)}>
                          <span className={tw(`font-semibold flex flex-end items-center content-center gap-1 w-max`)}>
                            <svg
                              aria-hidden='true'
                              role='img'
                              className={tw(`octicon octicon-person`)}
                              viewBox='0 0 16 16'
                              width='16'
                              height='16'
                              fill='#8b949e'
                              style={{
                                display: 'inline-block',
                                userSelect: 'none',
                                verticalAlign: 'text-bottom',
                                overflow: 'visible',
                              }}
                            >
                              <path
                                fillRule='evenodd'
                                d='M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z'
                              ></path>
                            </svg>
                            <div className={tw(`whitespace-nowrap`)}>Fixed Price</div>
                          </span>
                          <div className={tw(`flex flex-row space-x-1 items-center`)}>
                            <div className={tw(`pr-2 pt-1 flex-0 w-4`)}>
                              <Image height={20} width={12} className='rounded-full pt-1' src={'/ETH.svg'} />
                            </div>
                            <div className={tw(`font-semibold `)}>TVL</div>
                            <div className=''>$500</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bounties;
