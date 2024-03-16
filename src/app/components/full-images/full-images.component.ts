import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-images',
  templateUrl: './full-images.component.html',
  styleUrls: ['./full-images.component.css']
})
export class FullImagesComponent implements OnInit {
  imageUrl: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the image URL from the route parameter
    this.imageUrl = this.route.snapshot.paramMap.get('imageUrl');
  }
}
