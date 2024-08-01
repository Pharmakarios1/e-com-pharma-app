from rest_framework.viewsets import ModelViewSet
from ..models import Product, Blog
from .serializers import ProductSerializer, BlogSerializer
from rest_framework.response import Response
from rest_framework.decorators import action


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class BlogViewSet(ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    # @action(detail=False, methods=["GET"])
    # def post(self, request):
    #     products = Product.objects.all()
    #     serializer = ProductSerializer(products, many=True)
    #     return Response({'received data': serializer.data})