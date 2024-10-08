import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Lastvisit from './Lastvisit';
import Footers from './Footers';
import Blogs from './Blogs';
import Ratio from 'react-bootstrap/Ratio';

export default function Kedarnath() {
  return (
   
    <div className='chardham'>
        <div>
  <Ratio aspectRatio="16x9">
    <video
      src="./src/assets/Basrinath-s.mp4"
      controls
      width="100%"
      height="100%"
      autoPlay={true}
      muted={true}
    >
     
    </video>
  </Ratio>
</div>
      <br />
      <Container>
        <Row>
          <Col>
          <h1>केदारनाथ यात्रा का विवरण</h1>
          <section>
            <h2>स्थान</h2>
            <p><strong>जिला:</strong> रुद्रप्रयाग, उत्तराखंड</p>
            <p><strong>ऊँचाई:</strong> लगभग 3,584 मीटर (11,762 फीट) समुद्रतल से</p>
        </section>

        <section>
            <h2>धार्मिक महत्व</h2>
            <p><strong>मुख्य देवता:</strong> भगवान शिव</p>
            <p><strong>मंदिर:</strong> केदारनाथ मंदिर, जो भगवान शिव की पूजा के लिए प्रसिद्ध है। यह मंदिर भगवान शिव के बारह ज्योतिर्लिंगों में से एक है।</p>
        </section>

        <section>
            <h2>इतिहास और पौराणिक कथा</h2>
            <p><strong>पौराणिक कथा:</strong> पौराणिक कथाओं के अनुसार, भगवान शिव यहाँ कैलाश पर्वत से भागते हुए आए थे और इस स्थान पर उनका अवतरण हुआ था।</p>
            <p><strong>इतिहास:</strong> केदारनाथ मंदिर का निर्माण पांडवों द्वारा महाभारत काल में किया गया था। यह स्थल ऐतिहासिक रूप से बहुत महत्वपूर्ण है और तीर्थयात्रियों के लिए एक पवित्र स्थल है।</p>
        </section>

        <section>
            <h2>मुख्य आकर्षण</h2>
            <ul>
                <li><strong>केदारनाथ मंदिर:</strong> यह मंदिर भगवान शिव की पूजा के लिए प्रमुख स्थल है। यह मंदिर उच्च पर्वतीय क्षेत्र में स्थित है और इसकी वास्तुकला अद्वितीय है।</li>
                <li><strong>भैरव मंदिर:</strong> यह मंदिर केदारनाथ मंदिर के पास स्थित है और यहाँ भैरव बाबा की पूजा की जाती है। इसे भी तीर्थयात्री महत्वपूर्ण मानते हैं।</li>
                <li><strong>चोराबारी ताल:</strong> यह एक सुंदर पर्वतीय झील है जो केदारनाथ से कुछ दूरी पर स्थित है। यहाँ की शांतिपूर्ण सुंदरता तीर्थयात्रियों को आकर्षित करती है।</li>
                <li><strong>फाटा:</strong> यह एक महत्वपूर्ण स्थान है जहाँ से केदारनाथ के लिए हेलीकॉप्टर सेवा उपलब्ध है। यहाँ से यात्रा शुरू की जा सकती है।</li>
            </ul>
        </section>

        <section>
            <h2>यात्रा और मौसम</h2>
            <p><strong>यात्रा का समय:</strong> आमतौर पर अप्रैल से नवंबर तक यात्रा की जाती है। सर्दियों में अत्यधिक बर्फबारी के कारण मंदिर बंद रहता है।</p>
            <p><strong>मौसम:</strong> गर्मियों में (मई से अक्टूबर) मौसम सुखद रहता है, जबकि सर्दियों में (नवंबर से मार्च) यहाँ बहुत ठंड होती है और बर्फबारी हो सकती है।</p>
        </section>

        <section class="important">
            <h2>यात्रा सुझाव</h2>
            <ul>
                <li><strong>शारीरिक तैयारी:</strong> उच्च ऊंचाई पर स्थित होने के कारण, यात्रा से पहले शारीरिक तैयारी और उचित वस्त्र पहनना आवश्यक है।</li>
                <li><strong>आराम:</strong> यात्रा के दौरान उचित आराम और पानी का सेवन करना आवश्यक है।</li>
                <li><strong>परिवहन:</strong> यात्रा के लिए अच्छी तरह से सुसज्जित गाड़ियों और यात्रा एजेंसियों की मदद लेना फायदेमंद होता है।</li>
            </ul>
        </section>
          </Col>
        </Row>
      </Container>
      <div className="blog">
      <Blogs/>
    </div>
    <div className="recenttrip py-5">
    <Lastvisit/>
    </div>
    <div className="footersection">
      <Footers/>
    </div>

 
    </div>
  )
}
