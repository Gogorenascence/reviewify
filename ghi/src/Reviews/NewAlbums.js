import { Container, Button, Row, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import AlbumModal from "./AlbumModal";

function NewAlbums() {
    const [albums, setAlbums] = useState([]);

    function getNewAlbums() {
        fetch(
            `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/browse/new-releases`
        )
            .then((response) => response.json())
            .then((data) => {
                let all_albums = data["albums"]["items"];
                let filtered_albums = all_albums.filter(
                    (album) => album["total_tracks"] > 1
                );
                setAlbums(filtered_albums);
            });
    }

    useEffect(() => {
        getNewAlbums();
    }, []);
    return (
        <div className="App" style={{ marginTop: "30px" }}>
            {/* <Carousel variant="light" style={{ width: "500px" }}>
                {albums?.map((album, i) => {
                    return (
                        <Carousel.Item style={{}}>
                            <AlbumModal
                                style={{ width: "50px", height: "50px" }}
                                album_id={album.id}
                                img_url={album.images[0].url}
                                album_name={album.name}
                            />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            // </Carousel> */}

            <Container>
                <Row className="mx-2 row row-cols-4">
                    {albums?.map((album, i) => {
                        return (
                            <Card
                                key={album.id}
                                variant="primary"
                                style={{
                                    padding: "0px",
                                    marginBottom: "20px",
                                }}>
                                <AlbumModal
                                    album_id={album.id}
                                    img_url={album.images[0].url}
                                    album_name={album.name}
                                />
                            </Card>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}
export default NewAlbums;
