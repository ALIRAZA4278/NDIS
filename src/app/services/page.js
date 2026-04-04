import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Services from '@/components/Services';

export default function ServicesPage() {
	return (
		<div className="bg-white">
			<Navbar />
			<main>
				<Services />
			</main>
			<Footer />
		</div>
	);
}
