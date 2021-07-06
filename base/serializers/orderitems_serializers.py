from rest_framework import serializers
from base.models import OrderItems

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = '__all__'