from rest_framework.serializers import ModelSerializer
from ..models import Product
class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        # fields =('id','name', 'category', 'created_at')
        fields ="__all__"