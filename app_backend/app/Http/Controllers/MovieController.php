<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index()
    {
        $client = new Client();
        $response = $client->request('GET', 'http://108.136.44.196:3000/api/movie/trending');
        $data = json_decode($response->getBody()->getContents(), true);

        return new JsonResponse(
            [
                'data' => $data,
                'status' => 'success',
                'message' => 'Trending movies'
            ]
        );
    }
}
