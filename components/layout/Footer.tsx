'use client'
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="h-[8.6px] bg-primary" />
      <div className="flex">
        <div className="w-full place-content-center">
          <div className="pl-[160px]">
            <h1 className="font-[700] text-[60px] leading-[72.61px] tracking-[-1.7%]">Máte zájem o výrobky značky Rehau?</h1>
            <h1 className="font-[300] text-[60px] leading-[72.61px] tracking-[-1.7%]">Vyplňte nezávazně formulář a my se vám ozveme.</h1>
          </div>
        </div>
        <div className="flex w-full bg-primary pl-[79.37px] pt-[51.62px] pb-[50.46px] pr-[119.69px] gap-[57.69px]">
          <form>
            <div className="flex gap-[38px]">
              <div>
                <label htmlFor="name" className="font-[400] text-white leading-[24.2px] tracking-[-1.7%] text-[20px]">
                  Jméno*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Vaše celé jmené*"
                  className="h-[60px] rounded-[5px] w-full px-4"
                />
              </div>
              <div>
                <label htmlFor="name" className="font-[400] text-white leading-[24.2px] tracking-[-1.7%] text-[20px]">
                  Jméno*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Telefonní číslo*"
                  className="h-[60px] rounded-[5px] w-full px-4"
                />
              </div>
            </div>
            <div className="mt-[42px]">
              <label htmlFor="name" className="font-[400] text-white leading-[24.2px] tracking-[-1.7%] text-[20px]">
                Email*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Váš email*"
                className="h-[60px] rounded-[5px] w-full px-4"
              />
            </div>
            <div className="mt-[41.45px]">
              <label htmlFor="name" className="font-[400] text-white leading-[24.2px] tracking-[-1.7%] text-[20px]">
                Zpráva
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Zpráva"
                className="h-[60px] rounded-[5px] w-full px-4"
              />
            </div>
            <button className="bg-[#890000] mt-[32.61px] rounded-full font-[750] text-[20px] leading-[24.2px] tracking-[-1.7%] text-white w-[229.55px] h-[42.62px]">
              Odeslat poptávku
            </button>
          </form>
          <svg width="236" height="390" viewBox="0 0 236 390" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64.0577 0.96167L235.311 51.9426V330.835L64.0583 389.458L64.058 323.946L87.3265 332.134V355.709L212.108 312.899V71.45L87.3156 33.4642V298.548L64.0577 290.628V0.96167Z" fill="white" />
            <path d="M0.730713 90.0728L57.4465 72.7585V91.8192L18.6594 104.247V282.239L110.268 313.858V75.7026L94.0688 80.8427V61.9966L127.401 51.8728V338.697L0.730713 295.25V159.043V90.0728Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="h-[8.6px] bg-primary" />
      <div className="mx-auto mt-[48.8px] w-[1333.13px] flex justify-between">
        <div>
          <Image src={'/img/footer-logo.png'} alt={"footer logo"} width={198.91} height={106.52} className="w-auto h-auto " />
          <Image src={'/img/rehau-logo.png'} priority alt={"rehau logo"} width={116.47} height={119} className="w-auto h-auto mx-auto mt-[50.76px]" />
        </div>
        <div className="flex">
          <div className="w-[282.65px] mr-[28px] flex flex-col">
            <Link href={'#'} className="font-[700] leading-[30.26px] tracking-[-1.7%] text-[25px] h-[72px] place-content-center">Navigace</Link>
            <Link href={'#'} className="font-[300] leading-[30.26px] tracking-[-1.7%] text-[25px] mt-[6.81px]">Okna SYNEGO</Link>
            <Link href={'#'} className="font-[300] leading-[30.26px] tracking-[-1.7%] text-[25px] mt-[17.14px]">Okna Briliant design</Link>
            <Link href={'#'} className="font-[300] leading-[30.26px] tracking-[-1.7%] text-[25px] mt-[17.14px]">Ke stažení</Link>
          </div>
          <div className="w-[282.65px]">
            <div className="font-[700] leading-[30.26px] tracking-[-1.7%] text-[25px] h-[72px] place-content-center">Konakt</div>
            <div className="font-[300] leading-[30.26px] tracking-[-1.7%] text-[25px] mt-[6.81px]">+420 123 456 789</div>
            <div className="font-[300] leading-[30.26px] tracking-[-1.7%] text-[25px] mt-[17.14px]">info@kftokna.cz</div>
            <div className="font-[300] leading-[30.26px] tracking-[-1.7%] text-[25px] mt-[17.14px]">IČO 1234567</div>
            <div className="font-[300] leading-[30.26px] tracking-[-1.7%] text-[25px] mt-[17.14px]">DIČ CZ1234567</div>
          </div>
        </div>
      </div>
      <div className="w-[1196.54px] text-nowrap items-center mx-auto mt-[120.36px] mb-[15.36px] flex text-[#929292] font-[400] leading-[18.15px] text-[15px] tracking-[-1.7%]">
        <p className="mr-[15.52px]">© 2024 KFT OKNA</p>
        <div className="w-[1.5px] bg-[#929292] h-[29.13px]" />
        <p className="ml-[21.95px]">design & conent by <span className="text-[#189FD9] font-[800]">STAYON MEDIA</span> agency 2023</p>
        <div className="w-full" />
        <p>Zásady ochrany osobních údajů</p>
        <div className="w-[1.5px] bg-[#929292] h-[29.13px] mx-[13.84px]" />
        <p>Nastavení Cookies</p>
      </div>
    </>
  )
}

export default Footer