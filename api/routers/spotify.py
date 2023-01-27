from fastapi import APIRouter, Depends
from queries.spotify import SpotifyQueries

router = APIRouter()

@router.get('/api/artists/{name}')
def get_artist_albums(name: str, repo: SpotifyQueries = Depends()):
    return repo.get_artist_albums(name)

@router.get('/api/albums/{album_id}')
def get_album_details(album_id: str, repo: SpotifyQueries = Depends()):
    return repo.get_album_details(album_id)

@router.get('/api/{artist_id}/related')
def get_related_artists(artist_id: str, repo: SpotifyQueries=Depends()):
    return repo.related_artists(artist_id)

@router.get('/api/artists/{genre}/{name}')
def get_artist_albums_by_genre(genre: str, name: str, repo: SpotifyQueries=Depends()):
    return repo.get_artist_albums_by_genre(genre, name)
