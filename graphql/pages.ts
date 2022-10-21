import { gql } from "@apollo/client";
import { FOOTER_FIELDS, MAIN_MENU_FIELDS } from "./globals";

export const PAGES = gql`
  query Pages {
    Pages(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const PAGE = gql`
  query Page($slug: String ) {
    Pages(where: { slug: { equals: $slug}}) {
      docs {
        title
      }
    }

    MainMenu {
      ...MainMenuFields
    }

    Footer {
      ...FooterFields
    }
  }

  ${MAIN_MENU_FIELDS}
  ${FOOTER_FIELDS}
`