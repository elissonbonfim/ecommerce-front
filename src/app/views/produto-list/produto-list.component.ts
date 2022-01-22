import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/shared/service/produto.service';
import { Produto } from 'src/app/shared/model/produto';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos?: Produto[];
  url?: string;
  urlSafe?: SafeResourceUrl;

  constructor(
    private rest: ProdutoService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(){
    this.rest.getProdutos('/all').subscribe(data =>
      this.produtos = data.content);
  }
}
