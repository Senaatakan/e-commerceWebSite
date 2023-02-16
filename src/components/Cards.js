import CardItem from "./CardItem"

function Cards() {

	const cards = [
		{
			title: 'Uygun fiyatlar',
			description: 'İskontolu fiyatları sitemizde bulabilirsiniz.',
			image: 'https://www.tasciyapi.com.tr/uploads/kategoriler/kablolar-n5k7g.jpg'
		},
		{
			title: 'Hızlı teslimat',
			description: 'Siparişiniz günler içinde kapınıza gelir.',
			image: 'http://laundrybeyaz.com/upload/hizmetler/hizli-teslimatimiz.png'
		},
		{
			title: 'Kalite garantisi',
			description: 'Kaliteli ürünler kapınıza gelir.',
			image: 'https://www.erikogluelektrik.com.tr/timthumb.php?src=images/media/MTVkMDNhNTE4MmZlODE.jpg&w=320&h=320&zc=2'
		}
	]

	return (
		<>
			<div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{cards.map((card, key) => <CardItem key={key} card={card} />)}
			</div>
            <br></br>
            <br></br>
		</>
	)
}

export default Cards