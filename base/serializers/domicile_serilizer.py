from rest_framework import serializers
from base.models import Products, Reviews, Domicile

class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domicile
        fields = '__all__'