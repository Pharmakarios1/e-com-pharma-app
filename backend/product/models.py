from django.db import models
# from ..blog.models import Blog
import uuid

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=600, null=True, blank=True)
    category = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now=True)
    id_product = models.UUIDField(default = uuid.uuid4, editable = False, blank=True)
    slug =models.SlugField(unique=True, blank=True, null=True) 
    image = models.ImageField(upload_to="media/product", null=True, blank=True )
    relationship = models.ManyToManyField("Blog")
   

    
    def __str__(self):
        return f"Products: {self.name}"
    
class Blog(models.Model):
    blog_title = models.CharField(max_length=200)
    blog_detail = models.TextField(max_length=3000)
    created_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='media/blog/', null=True)
  

    def __str__(self) -> str:
        return self.blog_title
    
class Micro_blog(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    Blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    Product_blog_date =models.DateField(blank=True, null=True)
