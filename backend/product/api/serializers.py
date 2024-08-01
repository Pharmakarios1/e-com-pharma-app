from rest_framework.serializers import ModelSerializer
from ..models import Product, Blog, Micro_blog
class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        # fields =('id','name', 'category', 'created_at')
        fields ="__all__"

class BlogSerializer(ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"
