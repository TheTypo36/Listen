import { useLocation } from "react-router-dom";
import styled from "styled-components";


const Detail = () => {

    const location = useLocation();
    const {item,setSongPlaying} = location.state;
    console.log('here in detail', item);
    const handleClick = (item) =>{
        setSongPlaying(item);
    }
    return(
        <container>

            <DetailContainer>
            <HeaderSection>
                <CoverContainer>
                    <img src={item.posterUrl} alt="poster" onClick={()=>handleClick(item)} />
                </CoverContainer>
                <Titles>
                    <span>Song</span>
                    <div id="songName">
                        {item.songName}
                    </div>
                    <div id="artistName">
                        {item.artistName}
                    </div>
                </Titles>

            </HeaderSection>
            <MidSection>
              
                
            </MidSection>
            <FooterSection>
                <hr/>
                <div id="info">
                    
                </div>
            </FooterSection>
        </DetailContainer>
        <videoSection>
            <video>
                <source type="video/mp3" src="" />
            </video>
        </videoSection>
    </container>
    
);
};

export default Detail;

const DetailContainer = styled.div`
    width: 70%;
    position: absolute;
    top: 10%;
    left: 300px;
    padding: 20px;
    border-radius: 10px;
    color: #fff;

    background: linear-gradient(180deg, rgba(110,7,40,1) 42%, rgba(42,14,9,1) 89%);
`
const HeaderSection = styled.div`
    display: flex;
    #songName{
        font-size: 40px;
    }

`;
const CoverContainer = styled.div`
    width: 200px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
`;
const Titles = styled.div`
    padding-left: 10px;
    font-weight: bold;

`;
const PlayButton = styled.div``;
const MidSection = styled.div``;
const FooterSection = styled.div`
    #info img{
        width: 40px;    
    }

`;