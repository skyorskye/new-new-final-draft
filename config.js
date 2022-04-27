var config = {
    style: 'mapbox://styles/skyorskye/cl1y0yyy1000r14qkz6f6ly0t',
    accessToken: 'pk.eyJ1Ijoic2t5b3Jza3llIiwiYSI6ImNrcmtnaWVqOTB6aHIyd2tkNWp3OGRtb2EifQ.iU-qKF1aEU6-398jRSEu2A',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '9 Projects',
            alignment: 'right',
            title: 'Chapter 3',
            image: '9 tiles.jpg',
            description: '',
            location: {
                center: [-74.616879, 43.011640],
                zoom: 18,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        }
    ]
};
