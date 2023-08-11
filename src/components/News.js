import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "news24",
        "name": "News24"
      },
      "author": "Cebelihle Bhengu",
      "title": "'I couldn't watch without trying to save her': Mpumalanga woman recalls day she rescued newborn baby",
      "description": "A woman who rescued a newborn baby who had been dumped at a sports field in Mbuzini, Mpumalanga, says God chose her to save the child.",
      "url": "https://www.news24.com/news24/southafrica/news/i-couldnt-watch-without-trying-to-save-her-mpumalanga-woman-recalls-day-she-rescued-newborn-baby-20230809",
      "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/1644/29c51b6c30334a0493cc67a2fbc94a8f.jpg",
      "publishedAt": "2023-08-09T09:15:25+00:00",
      "content": "<ul><li>A woman who rescued a newborn baby in Mpumalanga says she believed God had chosen her to save the abandoned child.</li><li>She told News24 that children playing in a sports field alerted her … [+2128 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Richard Lawler",
      "title": "Barstool Sportsbook operator rebrands as ESPN Bet in a new $1.5 billion licensing deal",
      "description": "ESPN’s licensing deal with Penn Entertainment will allow the sportsbook to rebrand its operations as ESPN Bet,",
      "url": "http://www.theverge.com/2023/8/8/23825043/espn-bet-penn-entertainment-barstool-sportsbook-gambling",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ivub7G4vbkR9T9YV2AtI6rtqwIs=/0x0:1162x662/1200x628/filters:focal(581x331:582x332)/cdn.vox-cdn.com/uploads/chorus_asset/file/24838915/penn_espn_bet.jpg",
      "publishedAt": "2023-08-08T23:29:56Z",
      "content": "Barstool Sportsbook operator rebrands as ESPN Bet in a new $1.5 billion licensing deal\r\nBarstool Sportsbook operator rebrands as ESPN Bet in a new $1.5 billion licensing deal\r\n / ESPNs business model… [+2848 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Heather Dinich",
      "title": "Greg Sankey sees 'sadness' in realignment, says SEC comfortable in footprint - ESPN",
      "description": "SEC commissioner Greg Sankey said watching the Pac-12 dissolve to four teams in the latest round of conference realignment \"wasn't one of those great feelings to work in college sports.\"",
      "url": "https://www.espn.com/college-football/story/_/id/38158929/greg-sankey-sees-sadness-realignment-says-sec-comfortable-footprint",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0120%2Fr964012_1296x729_16%2D9.jpg",
      "publishedAt": "2023-08-08T23:23:00Z",
      "content": "SEC commissioner Greg Sankey said \"there's a little tinge of sadness - probably more than just a little tinge,\" to see the Pac-12 on the verge of collapse after more than 100 years of existence, and … [+4620 chars]"
    },
    {
      "source": {
        "id": "business-insider-uk",
        "name": "Business Insider (UK)"
      },
      "author": "Katherine Tangalakis-Lippert, Ashley Rodriguez",
      "title": "Dave Portnoy buys Barstool Sports back for next to nothing",
      "description": "PENN sold Barstool to Portnoy in exchange for non-compete covenants and the right to receive half the proceeds if Portnoy sells again.",
      "url": "http://uk.businessinsider.com/dave-portnoy-buys-barstool-sports-back-penn-national-2023-8",
      "urlToImage": "https://i.insider.com/64d2b5c87d2e90001946c40f?width=1200&format=jpeg",
      "publishedAt": "2023-08-08T23:16:44Z",
      "content": "Dave Portnoy is once again the owner of Barstool Sports.\r\nPENN Entertainment, a casino and sports gaming business, finalized its complete acquisition of Barstool earlier this year in a deal worth $55… [+2217 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Cesar Hernandez",
      "title": "Sacramento Republic make U.S. soccer history inking Kimbrough, 13 - ESPN",
      "description": "USL Championship side Sacramento Republic signed 13-year-old Da'vian Kimbrough on Tuesday and might have made U.S. team sports history in the process.",
      "url": "https://www.espn.com/soccer/story/_/id/38158673/sacramento-republic-make-us-soccer-history-inking-kimbrough-13",
      "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0808%2Fr1208080_1296x729_16%2D9.jpg",
      "publishedAt": "2023-08-08T23:10:00Z",
      "content": "USL Championship side Sacramento Republic signed 13-year-old Da'vian Kimbrough on Tuesday and made U.S. soccer history in the process.\r\nAt 13 years, 5 months and 13 days old, Kimbrough is the younges… [+1741 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Katherine Tangalakis-Lippert",
      "title": "Dave Portnoy buys Barstool Sports back for next to nothing",
      "description": "PENN sold Barstool to Portnoy in exchange for non-compete covenants and the right to receive half the proceeds if Portnoy sells again.",
      "url": "http://www.businessinsider.com/dave-portnoy-buys-barstool-sports-back-penn-national-2023-8",
      "urlToImage": "https://i.insider.com/64d2b5c87d2e90001946c40f?width=1200&format=jpeg",
      "publishedAt": "2023-08-08T22:35:20Z",
      "content": "Dave Portnoy is once again the owner of Barstool Sports.\r\nPENN Entertainment, a casino and sports gaming business, finalized its complete acquisition of Barstool earlier this year in a deal worth $55… [+829 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": null,
      "title": "Penn Entertainment to rebrand sportsbook as ESPN Bet - ESPN",
      "description": "Penn will rebrand its current sportsbook to ESPN Bet this fall in the 16 states where it is licensed after a licensing deal was reached Tuesday.",
      "url": "https://www.espn.com/espn/story/_/id/38158198/penn-entertainment-rebrand-sportsbook-espn-bet",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F1116%2Fr152642_1296x729_16%2D9.jpg",
      "publishedAt": "2023-08-08T20:49:00Z",
      "content": "ESPN has signed a licensing deal with Penn Entertainment to create ESPN Bet, a sportsbook for audiences in the United States.\r\nPenn will rebrand its current sportsbook to ESPN Bet later this fall in … [+2474 chars]"
    },
    {
      "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
      },
      "author": "Bryan Fischer",
      "title": "Pac-12 learns the hard way: The one constant in college sports is change",
      "description": "Former commissioners of WAC, Big South, SWC empathize with Pac-12, share their own stories of dealing with realignment.",
      "url": "http://www.foxsports.com/stories/college-football/pac-12-learns-the-hard-way-the-one-constant-in-college-sports-is-change",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/08.08.23_CFB-Realign_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2023-08-08T20:48:00Z",
      "content": "To call Aug. 4 one of the worst days George Kliavkoff has had in a professional capacity would be an understatement.\r\nThe Pac-12 commissioner awoke early that Friday believing presidents and chancell… [+13196 chars]"
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": null,
      "title": " Rooks x Pulisic Interview ️",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/457604-rooks-x-pulisic-vod",
      "urlToImage": null,
      "publishedAt": "2023-08-01T17:52:19.0557986Z",
      "content": "Copyright © 2023 Bleacher Report, Inc. Turner Broadcasting System, Inc.\r\n All Rights Reserved.\r\n BleacherReport.com is part of Bleacher Report Turner Sports Network, part of the Turner Sports and Ent… [+200 chars]"
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": null,
      "title": "Cedric Mullins Interview ⚾️",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/457122-betts-x-mullins-full-vod",
      "urlToImage": null,
      "publishedAt": "2023-08-01T17:52:17.8373521Z",
      "content": "Copyright © 2023 Bleacher Report, Inc. Turner Broadcasting System, Inc.\r\n All Rights Reserved.\r\n BleacherReport.com is part of Bleacher Report Turner Sports Network, part of the Turner Sports and Ent… [+200 chars]"
    }
  ]

  constructor(){
    super();
    console.log("Hello, I'm a constructor.")
    this.state = {
      articles: this.articles
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='d-flex justify-content-center'>NewsAround Top Headline</h2>
        <div className="row my-3">
          <div className="col-md-4">
            <NewsItem title={"My Title"} description={"My Description"} imageUrl={"https://cdn.24.co.za/files/Cms/General/d/1644/29c51b6c30334a0493cc67a2fbc94a8f.jpg"} />
          </div>
          <div className="col-md-4">
            <NewsItem title={"My Title"} description={"My Description"} />
          </div>
          <div className="col-md-4">
            <NewsItem title={"My Title"} description={"My Description"} />
          </div>
        </div>
      </div>
    )
  }
}
