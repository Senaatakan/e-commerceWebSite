import {FaInstagram } from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi';
import {IoLogoWhatsapp} from "react-icons/io"
import {BsLinkedin,BsFillTelephoneFill} from "react-icons/bs"
import {GrMail} from "react-icons/gr"
import {GoLocation} from "react-icons/go"


function Footer() {
	return (
		<div className="bg-white py-4 sm:pt-10 sm:pb-6">
			<div className="container mx-auto grid gap-y-5">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4">
					<nav>
						<h3 className="text-lg text-red-700 mb-4">
							Sosyal Medya
						</h3>
						<ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-3">
							<li>
              <a href="https://api.whatsapp.com/send/?phone=%2B905079073531&text&type=phone_number&app_absent=0" className="ml-8 transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700">
							<IoLogoWhatsapp size={30}/> 
						</a>
								
							</li>
							<li>
              <a href="https://www.linkedin.com/company/i%CC%87ntelsa%C5%9F-enerji%CC%87-sanayi%CC%87-ti%CC%87caret-li%CC%87mi%CC%87ted-%C5%9Fi%CC%87rketi%CC%87/" className="ml-8 transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700">
							<BsLinkedin size={30} />
						</a>
							</li>
							<li>
              <a href="https://www.instagram.com/intelsas/" className="ml-8 transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700">
							<FaInstagram size={30} />
						</a>
							</li>
						</ul>
					</nav>
          <nav>
						<h3 className="text-lg text-red-700 mb-4">
							Yardıma mı ihtiyacınız var?
						</h3>
						<ul className="grid gap-y-3 text-sm">
							<li>
								<a href="#" className="hover:underline">Sıkça Sorulan Sorular</a>
							</li>
							<li>
								<a href="#" className="hover:underline">Kişisel Verilerin Korunması</a>
							</li>
							<li>
								<a href="#" className="hover:underline">Gizlilik Politikası</a>
							</li>
							<li>
								<a href="#" className="hover:underline">İade ve değişim koşulları</a>
							</li>
							<li>
								<a href="#" className="hover:underline">Çerez Politikası</a>
							</li>
						</ul>
					</nav>
					<nav>
						<h3 className="text-lg text-red-700 mb-4">
							Bizi keşfedin
						</h3>
						<ul className="grid gap-y-3 text-sm">
							<li>
								<a href="#" className="hover:underline">Hakkımızda</a>
							</li>
							<li>
								<a href="#" className="hover:underline">Kariyer</a>
							</li>
							{/* <li>
								<a href="#" className="hover:underline">İletişim</a>
							</li>
							 */}
							{/* <li>
								<a href="#" className="hover:underline">Sosyal Sorumluluk Projeleri</a>
							</li> */}
						</ul>
					</nav>
					
					<nav>
						<h3 className="text-lg text-red-700 mb-4">
							İletişim
						</h3>
						<ul className="grid gap-y-3 text-sm">
            <li className="flex">
            <GrMail size={25} className="mr-6"/>
								<a href="mailto:info@intelsas.com" className="hover:underline">info@intelsas.com</a>
							</li>
							<li className="flex">
                <BsFillTelephoneFill size={25} className="mr-6"/>
								<a href="tel:+902623353087" className="hover:underline">+902623353087</a>
							</li>
              <li className="flex">
                <GoLocation size={25} className="mr-6"/>
								<a href="https://www.google.ru/maps/place/Google+Building+41,+1600+Amphitheatre+Pkwy,+Mountain+View,+CA+94043,+%D0%A1%D0%A8%D0%90/@37.422496,-122.0877553,17z/data=!3m1!4b1!4m5!3m4!1s0x808fba02f3d60bc5:0x6bc3b76cb42de9de!8m2!3d37.4224082!4d-122.0856086?shorturl=1" className="hover:underline">Çarşı Yapı AVM Sanayi Mah. Kozalı Sok No:10 C/3 İzmit/Kocaeli</a>
							</li>
							{/* <li>
								<a href="#" className="hover:underline">GetirYemek Restoranı Olun</a>
							</li>
							<li>
								<a href="#" className="hover:underline">GetirÇarşı İşletmesi Olun</a>
							</li> */}
						</ul>
					</nav>
				</div>
				<div className="h-[1px] bg-gray-100"></div>
				<div className="flex justify-between flex-col items-center gap-y-3 sm:gap-y-0 sm:flex-row text-sm pt-1 sm:pt-3">
					<div className="flex gap-x-4 text-gray-700">
						&copy; 2023 İntelsaş
						<div>
							<a href="#" className="text-red-700 hover:underline">Bilgi Toplumu Hizmetleri</a>
						</div>
					</div>
					<nav className="flex gap-x-2 items-center">
						<a href="https://api.whatsapp.com/send/?phone=%2B905079073531&text&type=phone_number&app_absent=0" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700">
							<IoLogoWhatsapp size={20} />
						</a>
						<a href="https://www.linkedin.com/company/i%CC%87ntelsa%C5%9F-enerji%CC%87-sanayi%CC%87-ti%CC%87caret-li%CC%87mi%CC%87ted-%C5%9Fi%CC%87rketi%CC%87/" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700">
							<BsLinkedin size={20} />
						</a>
						<a href="https://www.instagram.com/intelsas/" className="transition-colors w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700">
							<FaInstagram size={20} />
						</a>
						{/* <a href="#" className="transition-colors h-8 flex items-center gap-x-2 border border-gray-100 rounded-lg text-sm text-gray-600 px-3 hover:bg-red-50 hover:text-red-700">
							<FiGlobe size={18} />
							Türkçe (TR)
						</a> */}
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Footer