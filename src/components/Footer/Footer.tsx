import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

const FooterRaw = () => {
    return (
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand
              href="https://picsum.photos/id/237/200/300"
              src="https://picsum.photos/id/237/200/300"
              alt="ABC Logo"
              name="ABC"
            />
            <FooterLinkGroup>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <FooterCopyright href="#" by="ABC™" year={2024} />
        </div>
      </Footer>
    );
}

export default FooterRaw;